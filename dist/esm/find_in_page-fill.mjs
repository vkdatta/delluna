export const name="find_in_page-fill";
export const id="dl_d2e1b066bdd8a2bb7afe";
export const url=new URL("../icons/find_in_page-fill.svg?v=90a57e550de6ed351cf3a8006cda3a8ab2c6ae94b75da8a1fd1d04e725441f85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
