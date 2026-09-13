export const name="6_ft_apart-fill";
export const id="dl_bedcb1cb8fa942b28d75";
export const url=new URL("../icons/6/6_ft_apart-fill.svg?v=8b8282d6317e0ba76570635c1e0d8a911eb01b12a2d5f260e11821ded7b6a4df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
