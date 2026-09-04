export const name="baseball";
export const id="dl_c6c6c405fb764499917f";
export const url=new URL("../../icons/B/baseball.svg?v=b0c86bf7fd716f1d55a354c3e08edd27435332c748bd3cfbaa9a92e307636193",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
