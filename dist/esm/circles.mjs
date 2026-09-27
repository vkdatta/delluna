export const name="circles";
export const id="dl_d753da8f4d32e5be81f7";
export const url=new URL("../icons/circles.svg?v=79d74b456b4a8244562da51bb22ebbfd4a030001d7e54116a2a4a76a726cb44a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
