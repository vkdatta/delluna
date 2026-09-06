export const name="fire-simple";
export const id="dl_72e795ea7461450ba9cc";
export const url=new URL("../icons/fire-simple.svg?v=216d825e79604838e1b174060ec5d0bf0b6c5b2dbe46913c756b28ab50d5cdc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
