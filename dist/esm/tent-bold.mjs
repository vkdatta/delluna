export const name="tent-bold";
export const id="dl_2cc939d505fd7c2fdb0d";
export const url=new URL("../icons/tent-bold.svg?v=fb0367679593d98595df80aa15c1f0f5bbd9c59e7c91d91af660c933a81f31ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
