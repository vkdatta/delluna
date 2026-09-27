export const name="sword";
export const id="dl_ad8b51735e845cbfdeaf";
export const url=new URL("../icons/sword.svg?v=485fc762f87dccc09af65218b0c46511aa85bfafc1557def8028f672f834ea0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
