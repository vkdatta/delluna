export const name="bicycle-duotone";
export const id="dl_c776fc9ac29548a2adc9";
export const url=new URL("../icons/bicycle-duotone.svg?v=602e4d7d1fdf785170c46d63ab74b718c6e8d09c51f4afc55ec2f23bacd6261d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
