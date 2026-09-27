export const name="arrow-elbow-left-down";
export const id="dl_9875aaee11bb4f918f47";
export const url=new URL("../icons/arrow-elbow-left-down.svg?v=bb04079d6ded7316179dcb17e66101fec66a3529990d2bb6cef6589e6cb7dc10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
