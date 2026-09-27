export const name="remote_gen";
export const id="dl_8428ae86e94341c1edb5";
export const url=new URL("../icons/remote_gen.svg?v=7e3f92514b2d4e553e48e3b89a27f9a17e2f6b2d7e3f58a7a8bf686077cd73d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
