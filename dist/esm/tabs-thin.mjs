export const name="tabs-thin";
export const id="dl_a5764391729c6f760c16";
export const url=new URL("../icons/tabs-thin.svg?v=e53df62274ec946ab7df15f0bd015bfe8e2bca68593e83472f2315bb7aec0da6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
