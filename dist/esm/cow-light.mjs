export const name="cow-light";
export const id="dl_564c3a2ef0d04639946c";
export const url=new URL("../icons/cow-light.svg?v=5f603b3b554afb42bd374fa1a1fbc36a2e65dbad650b0b8f3411aa22def900bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
