export const name="fast-forward-circle-bold";
export const id="dl_f374586147a04fe7be17";
export const url=new URL("../icons/fast-forward-circle-bold.svg?v=beddae4467a2c561a401dae01ed20c1931ce58d6084c60d45a9cac36b756a217",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
