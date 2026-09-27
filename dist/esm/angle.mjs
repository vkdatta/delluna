export const name="angle";
export const id="dl_924612994f664ee09055";
export const url=new URL("../icons/angle.svg?v=00b6dd0337c6795faa0a6da25863e6ad36a3a3ec18c33dee8705e4da3e01f752",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
