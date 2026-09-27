export const name="notches-fill";
export const id="dl_67c69f3c2f2244ba9a68";
export const url=new URL("../icons/notches-fill.svg?v=a229a6ad579dff29128198ab82d563b64142531b329187dc13ac5ff8f67d79fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
