export const name="magnifying-glass-minus-bold";
export const id="dl_03a0d7f6a6b240e9becd";
export const url=new URL("../icons/magnifying-glass-minus-bold.svg?v=831612a36e34dd7a6abe6012d7397aa056ab674ac5cac666d9f9db927f8b35b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
