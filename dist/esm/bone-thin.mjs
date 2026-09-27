export const name="bone-thin";
export const id="dl_36c188d7ccae4f18ad98";
export const url=new URL("../icons/bone-thin.svg?v=27bb0e275313f7de6d9247d3e94e7cb220c2d6b1d999391fc060af6eeadaadf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
