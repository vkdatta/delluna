export const name="caret-right-light";
export const id="dl_312a718167724ce1a780";
export const url=new URL("../icons/caret-right-light.svg?v=9a98fc23239b7a368f52eca8c1dd400808f1812a3ec1b6b7234c74f48e8ba428",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
