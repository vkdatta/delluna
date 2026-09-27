export const name="no_drinks";
export const id="dl_27082edc76b4d6e53e32";
export const url=new URL("../icons/no_drinks.svg?v=c1ff61939339d8539d342b74e6f184efe465afab72b153344879a3de0403edf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
