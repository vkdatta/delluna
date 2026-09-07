export const name="list-plus-thin";
export const id="dl_443ed7264df04ed0b994";
export const url=new URL("../icons/list-plus-thin.svg?v=902cc7e0d1946c3dabc7a52fe901699205ffb25d586f544747b887f1649661c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
