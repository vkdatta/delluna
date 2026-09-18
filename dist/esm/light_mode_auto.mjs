export const name="light_mode_auto";
export const id="dl_62ae00ad6ca143aaa1ad";
export const url=new URL("../icons/light_mode_auto.svg?v=a4964c10f4ddf3f65f45fddb6574bd7b36d78c30d30c282b14b667e14b16f8c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
