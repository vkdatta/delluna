export const name="farsight_digital";
export const id="dl_6d370e871e1399a19492";
export const url=new URL("../icons/farsight_digital.svg?v=69f733d86e1d9207b07cb24020157547def7868ecc3134666f267d050e5fe932",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
