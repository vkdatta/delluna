export const name="goodreads-logo-bold";
export const id="dl_f971aed657c9405295bc";
export const url=new URL("../icons/goodreads-logo-bold.svg?v=e5f21fd4e80b563d7402dce9c0e9e8c8ba0d6e111cbead412773baeb4a09bf7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
