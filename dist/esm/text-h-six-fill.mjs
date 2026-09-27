export const name="text-h-six-fill";
export const id="dl_a03c06e988b129983ee1";
export const url=new URL("../icons/text-h-six-fill.svg?v=2bf0cbbeeecffafd93f83f472188cadf3d82a70cb2671d1203e788de4c65f4dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
