export const name="6_ft_apart";
export const id="dl_23ff85cd4e2650481d8d";
export const url=new URL("../icons/6_ft_apart.svg?v=72be2c5eb9d4f817c3593cf04c690952a1a46084b8c2901541a794a2e95be9b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
