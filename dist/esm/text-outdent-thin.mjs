export const name="text-outdent-thin";
export const id="dl_0ca4a890fd53ee460819";
export const url=new URL("../icons/text-outdent-thin.svg?v=784961ecac5d1dac38a4f3f730f4c24c087331a8aa95f76c6df67a9df4e092d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
