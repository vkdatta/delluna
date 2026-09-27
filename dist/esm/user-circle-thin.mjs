export const name="user-circle-thin";
export const id="dl_0f72e8baf10e5c27fa58";
export const url=new URL("../icons/user-circle-thin.svg?v=27e855a55401918eb7266c54609f344ad4b32d4629bffbfb2e43f6ee4046440a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
