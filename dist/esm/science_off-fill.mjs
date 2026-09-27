export const name="science_off-fill";
export const id="dl_92546851fde35cccf3e7";
export const url=new URL("../icons/science_off-fill.svg?v=1285ecbf5ea3ae308a57ad80cea3864b6586c0c85b55574a97052bef5ff2eda2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
