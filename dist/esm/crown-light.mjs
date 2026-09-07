export const name="crown-light";
export const id="dl_2fe6f0804c8541539b2e";
export const url=new URL("../icons/crown-light.svg?v=fc0d622abc714bdb7da422869a55e84911eb3091da96b200727c9952c36af26f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
