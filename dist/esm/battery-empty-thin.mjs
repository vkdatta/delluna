export const name="battery-empty-thin";
export const id="dl_e03401de3a0a4eb1ae64";
export const url=new URL("../icons/battery-empty-thin.svg?v=409d7acc0393b58ced32ba574ea73e06473273417b38c84fe1e415924df70f08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
