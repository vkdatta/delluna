export const name="14mp-fill";
export const id="dl_567b125d97b94169bc6a";
export const url=new URL("../icons/1/14mp-fill.svg?v=2e77134a7bd6147712eac8c8ce24ac52447da276cc3e5675b3d7a23e364afaa1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
