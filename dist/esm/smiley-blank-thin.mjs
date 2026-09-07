export const name="smiley-blank-thin";
export const id="dl_6e005f92d56d42838b9b";
export const url=new URL("../icons/S/smiley-blank-thin.svg?v=641f5eaf3161407ca8c599b0c7b08f87e4d7a482e242efaf50ee65a589a4bb0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
