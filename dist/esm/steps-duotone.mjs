export const name="steps-duotone";
export const id="dl_36260b1edc0f4fcc9c51";
export const url=new URL("../icons/S/steps-duotone.svg?v=bb56d85eea0ddd49e7c79c3e9a450748492c95e2ba9b208f3e455cd88f5bdd0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
