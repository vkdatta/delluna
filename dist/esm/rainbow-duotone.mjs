export const name="rainbow-duotone";
export const id="dl_dc475f48078a4b9fa288";
export const url=new URL("../icons/rainbow-duotone.svg?v=495b33e6fd1dcea9cea5429c9834fde0569adea2fb7a48aad94328a314ed92a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
