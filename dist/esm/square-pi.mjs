export const name="square-pi";
export const id="dl_27c979c38abb407bb26a";
export const url=new URL("../icons/square-pi.svg?v=2dc6aeded8ffece9e5d6c0ed525f1a89e49014fb27cd61ee963696cf903d93a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
