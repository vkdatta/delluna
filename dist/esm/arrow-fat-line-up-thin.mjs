export const name="arrow-fat-line-up-thin";
export const id="dl_a5c24fe529674ea29484";
export const url=new URL("../icons/arrow-fat-line-up-thin.svg?v=0291ae3ce843443fd85cd2fcfca8af7195c04ebf49ad19fad10fb59ff4c701fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
