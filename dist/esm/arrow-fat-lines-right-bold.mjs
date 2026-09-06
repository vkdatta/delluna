export const name="arrow-fat-lines-right-bold";
export const id="dl_fec9b800d60545da962e";
export const url=new URL("../icons/arrow-fat-lines-right-bold.svg?v=7eccbe02ab2688bc7e5212377db1862116b84d1c05f1a3c54cf35b3726a49fd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
