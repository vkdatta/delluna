export const name="link-break-bold";
export const id="dl_219cd4dee4144568afcc";
export const url=new URL("../icons/link-break-bold.svg?v=00da6f4ef40d0db316304171e9dbc1254d26b19e8c7ced7ab0ac949d4d1d05e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
