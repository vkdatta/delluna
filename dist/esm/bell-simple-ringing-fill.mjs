export const name="bell-simple-ringing-fill";
export const id="dl_18d0d94c09af4d6bbbc6";
export const url=new URL("../icons/bell-simple-ringing-fill.svg?v=6a2b5e13e5dfad5f16e391458da487e8cbd8ad3178dfe68cdab4967f8e5757af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
