export const name="traffic-sign-duotone";
export const id="dl_887bef7f571a4e829858";
export const url=new URL("../icons/T/traffic-sign-duotone.svg?v=46310be864ba0af0d142295dc2f39c0abaa43b380a355207ba0b86a9e3b38bd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
