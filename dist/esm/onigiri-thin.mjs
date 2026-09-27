export const name="onigiri-thin";
export const id="dl_310e13574f75429a8eb4";
export const url=new URL("../icons/onigiri-thin.svg?v=9ed60ef34bbb96ef2bf6cc1b579f41916d9093e872d46a4c7ce1190a708a7161",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
