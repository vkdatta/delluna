export const name="text-indent-light";
export const id="dl_0ba742a4461e354643ad";
export const url=new URL("../icons/text-indent-light.svg?v=02ee2f34755db753e50ae8d277c57602eded5278f6ae1de8f07fe692635afc97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
