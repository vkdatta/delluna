export const name="arrow-bend-right-up-light";
export const id="dl_6194a7e37c8f410aaccb";
export const url=new URL("../icons/arrow-bend-right-up-light.svg?v=69d7c3e9c00dcf0b59473d96ddb16dd259ef83ed1be72fd1adaef7e9921942a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
