export const name="prohibit-thin";
export const id="dl_f94e51608065436983e0";
export const url=new URL("../icons/prohibit-thin.svg?v=b9b960aa8168cde6e2417bedb45bcccb343a55f7830c6d2a004ac2d7a36ad88b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
