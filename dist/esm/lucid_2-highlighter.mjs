export const name="lucid_2-highlighter";
export const id="dl_7f9d97f3ccf24933a9b6";
export const url=new URL("../icons/lucid_2-highlighter.svg?v=4c7a4d7c66ab9ded23d4fd3964bb8d9cd74c9cd6eb65c07b697da0cbef2b2fe9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
