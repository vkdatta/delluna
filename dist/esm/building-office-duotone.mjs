export const name="building-office-duotone";
export const id="dl_6cd24ae5fe2a4eb6827a";
export const url=new URL("../icons/building-office-duotone.svg?v=eb3646f7781f36cba7fdd6708c3267b62ff37b7270f6cf667911df9a23f8738e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
