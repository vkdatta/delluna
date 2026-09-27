export const name="token";
export const id="dl_91881552c69e60cb3a1a";
export const url=new URL("../icons/token.svg?v=1ad7324264c404a6141fce34e763abaaefcfea5812c9686a3ef5cb187ec1ffbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
