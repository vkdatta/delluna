export const name="interactive_space";
export const id="dl_41b97f43d68fc95c7980";
export const url=new URL("../icons/interactive_space.svg?v=a5149bf2dfa8d1bc696634b48e0dd5e2bdde945d4e8c3b1bb3c9c8658ef39cb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
