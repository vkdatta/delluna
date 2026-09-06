export const name="copy-simple-thin";
export const id="dl_4caf78b19d184cf9bfab";
export const url=new URL("../icons/copy-simple-thin.svg?v=9f5e461ebeca3dfa684c710de940c6b33d953e46b2fcf32970bfeb9d20e691e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
