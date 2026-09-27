export const name="stack-plus-duotone";
export const id="dl_be84f0caf620dffe6b25";
export const url=new URL("../icons/stack-plus-duotone.svg?v=c9b4b5aa145e2ae9c2ab81a35e1abde6d566e219d6246471099d80f6ea9e0c0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
