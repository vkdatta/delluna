export const name="smiley-sad-thin";
export const id="dl_1a5b0885dd83439634bb";
export const url=new URL("../icons/smiley-sad-thin.svg?v=9c78ef41031b50d692b473b37dd53642caa7e5806d847aa1d25d62d4f9e6040d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
