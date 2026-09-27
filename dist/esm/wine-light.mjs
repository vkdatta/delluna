export const name="wine-light";
export const id="dl_595622092cd7612dfd6c";
export const url=new URL("../icons/wine-light.svg?v=619ab123527a7b85ce417e1a11c38e1011e75fcbdb9d07d84aee0e498626ee92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
