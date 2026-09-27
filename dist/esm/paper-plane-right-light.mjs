export const name="paper-plane-right-light";
export const id="dl_59497547903b49d29e9e";
export const url=new URL("../icons/paper-plane-right-light.svg?v=c48c4cb25d019caa67c9975132fe0dd76eea6988e2907f872d3e7b1735826a6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
