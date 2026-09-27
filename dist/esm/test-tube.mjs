export const name="test-tube";
export const id="dl_7bec1f2a974f82af8a60";
export const url=new URL("../icons/test-tube.svg?v=ecdb34c88f7c624a5e80f5068894e95ea8bdd6eab0aea6a9345f2f4be8757d93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
