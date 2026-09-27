export const name="feather-light";
export const id="dl_9eb12dfb08f647189170";
export const url=new URL("../icons/feather-light.svg?v=59367d76b7e1b7a9d06ed840ddf85983f2af4afbba7faa47bb1aa55218e1abe2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
