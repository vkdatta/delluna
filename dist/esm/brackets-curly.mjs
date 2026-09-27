export const name="brackets-curly";
export const id="dl_a0a068903b4f45308a7c";
export const url=new URL("../icons/brackets-curly.svg?v=e98d915e079249941c2f8ca134f714f0bdb02b9acee901ed67c6368b312a3fc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
