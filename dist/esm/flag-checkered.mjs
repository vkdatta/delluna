export const name="flag-checkered";
export const id="dl_2ef8d77a6eaf4fc09e89";
export const url=new URL("../icons/flag-checkered.svg?v=2bd849825b193a944b6fc17472c00c8e7bf9d83f7bd42e0d1d315ea6ae7c1bc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
