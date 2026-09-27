export const name="tote-simple-thin";
export const id="dl_231929039c5bd0ef81f1";
export const url=new URL("../icons/tote-simple-thin.svg?v=ba83ce91171a49b5c8e2ca5c8cfe3d7e812c463f03b6fd406acf6b6885b67d9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
